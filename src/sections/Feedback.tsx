import { Component } from 'solid-js';
import { createStore } from 'solid-js/store';

const Feedback: Component = () => {
  const [fields, setFields] = createStore({ name: '', type: '', issue: '' });

  const submitFeedback = () => {
    return;
  };

  return (
    <div class='max-w-sm'>
      <div class='form-control w-full max-w-sm'>
        <label class='label text-xs'>
          <span class='label-text text-xs'>Full Name</span>
        </label>
        <input
          type='text'
          placeholder='Name'
          class='input input-bordered input-xs w-full max-w-sm'
          onInput={(e) => setFields('name', e.target.value)}
          disabled
        />

        <label class='label'>
          <span class='label-text text-xs'>Feedback Type</span>
        </label>
        <select
          class='select select-xs select-bordered w-full max-w-sm'
          onChange={(e) => setFields('type', e.target.value)}
          disabled
        >
          <option disabled selected>
            What's the problem?
          </option>
          <option>Issue/Bug</option>
          <option>Additional Feature</option>
        </select>

        <label class='label'>
          <span class='label-text text-xs'>Feedback Details</span>
        </label>
        <textarea
          class='textarea textarea-bordered textarea-xs disabled:placeholder-black placeholder-opacity-100'
          onInput={(e) => setFields('name', e.target.value)}
          placeholder='Feedback Feature Coming Soon! Please visit our Github to submit suggestions or issues.'
          disabled
        ></textarea>
      </div>
      <button
        class='btn btn-xs btn-neutral float-right mt-2'
        onClick={submitFeedback}
        disabled
      >
        Submit
      </button>
    </div>
  );
};

export default Feedback;
