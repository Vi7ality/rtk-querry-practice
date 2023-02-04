import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BiMailSend } from 'react-icons/bi';
import { useAddCommentMutation } from '../../redux/commentApi';
import styles from './Form.module.css';

export const Form = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [addComment] = useAddCommentMutation();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    switch (name) {
      case 'name':
        setAuthor(value);
        return
      case 'text':
        setContent(value);
        return
      default:
        return
    }
  };


  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (author.trim() === '' || content.trim() === '') {
      toast.error('Name or content is absent')
      return
    }
    try {
      await addComment({ author, content });
      toast.success('Comment successfuly added')
    } catch (error) {
      toast.error(`Error: ${error.message}`)
    }
   
    setAuthor('');
    setContent('');
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <label className={styles.label}>
          <span className={styles.labelName}>Full name</span>
          <input
            type='text'
            name='name'
            className={styles.input}
            value={author}
            onChange={onHandleChange}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.labelName}>Your comment</span>
          <textarea
            className={styles.input}
            name='text'
            rows='5'
            value={content}
            onChange={onHandleChange}
          ></textarea>
        </label>

        <button className={styles.formBtn}>
          <BiMailSend className={styles.icon} />
          Send
        </button>
      </form>
    </div>
  );
};
