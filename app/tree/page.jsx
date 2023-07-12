'use client'

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// tree currently renders repeatedly if you interact with the code
// likely to do with strict mode in development

const getFiles = async () => {
  const response = await fetch('/api/fileParser')
  const data = await response.json()
  return data;
}

const FileTree = () => {
  console.log('rendering')
  // useRef hook creates a variable that holds onto the value across rendering passes
  // (components SVG DOM element) NB initialised to null and React will assign it later in return statement
    // useEffect gives us a place to put side effects such as D3 code. It's a side effect because it adds content to the DOM outside of React's virtual DOM mechanism
  const d3Container = useRef(null);
  useEffect( () => {
    async function createTree() {
      const usableData = await getFiles();
    
      // Create root
      const root = d3.hierarchy(usableData);
    
      const fontSize = 15;
      const fontFamily = 'arial';
      const width = 750;
      
      // set constant value for node space e.g. 50 units
      const dx = 50;
      // root.height + 1 calculates levels of tree and adds 1 to account fot root level; dividing width by above makes sure equal amonut of space
      const dy = width / (root.height + 1);
    
      // create a tree layout
      const tree = d3
        // create new tree layout with default settings
        .tree()
        // set node; if not specificed defaults to [1, 1]
        .nodeSize([50, dy]);  
      tree(root);
    
      // initialise x0 and x1 to extremes
      let x0 = Infinity;
      let x1 = -Infinity;
      // iterate over each node in the root tree structue
      root.each((d) => {
        // if property of the current node is greater than current max, 
        // then update value of x1 to current maximum
        if (d.x > x1) x1 = d.x;
        // if property of current node is less than current minimum then update it to minimum
        if (d.x < x0) x0 = d.x;
      });
    
      // determines height needed to accomodate the tree including padding
      const height = x1 - x0 + dx * 2;
    
      // SVG container
      const svg = d3
        .select(d3Container.current) // select
        .append('svg') // create and append a <svg> to it
        .attr('viewBox', [-dy / 3, x0 - dx, width, height])
        .attr('width', width) // set width attribute
        .attr('height', height) // set height atribute
        .style('max-width', '100%') // stops it going off screen
        .style('height', 'auto')
        .style('font-size', fontSize)
        .style('font-family', fontFamily)
        .style('background-color', 'lightgrey');
    
      // Create a group element to hold the tree graph
      const g = svg
        .append('g') // used to group SVG shapes together so you can transform a group of shapes as if they were a single shape
        .attr('fill', 'none') // sets fill
        .attr('stroke', 'purple') // sets color of joins
        .attr('stroke-opacity', 0.75) // sets opacity of joins
        .attr('stroke-width', 1.5); // changes width of joins
    
      // Create links between the nodes
      const links = root.links();
    
      // create path elements within a g group; binds data to them and sets the d attribute to each path which is set using the d3 horizontal link function
      g.selectAll()
        .data(links)
        .join('path')
        .attr(
          'd',
          d3
            .linkHorizontal()
            .x((d) => d.y)
            .y((d) => d.x)
        );
    
      const node = svg
        .append('g')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-width', 3)
        .selectAll()
        .data(root.descendants())
        .join('g')
        .attr('transform', (d) => `translate(${d.y},${d.x})`);
    
      // draw circles
      node
        .append('circle')
        .attr('fill', (d) => (d.children ? 'red' : 'green')) // different fill depending on if a parent or child
        .attr('r', 2.5); // sets radius of circle
    
      node
        .append('text')
        .attr('dy', '0.3em') // where  text sits up-down relative to circle
        .attr('x', (d) => (d.children ? -8 : 8)) // where text sits left-rght from circle
        .attr('text-anchor', (d) => (d.children ? 'end' : 'start')) // children right of circle, parent on left
        .text((d) => d.data.name)
        // below adds a clone behind the text, of a particular color
        .clone(true)
        .lower()
        .attr('stroke', 'white');
    }
    createTree();
  },[])

  return <div ref={d3Container}></div>;
};

export default FileTree;
