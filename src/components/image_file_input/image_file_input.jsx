import React, { memo, useState } from 'react';
import { useRef } from 'react/cjs/react.development';
import styles from './image_file_input.module.css';

const ImageFileInput = memo(
    ({ imageUploader, name, onFileChange }) => {

        // Loading State 만들기~! == //
        const [loading, setLoading] = useState(false);
    
    
    
        const inputRef = useRef();
        const onButtonClick = (e) => {
            e.preventDefault();
            inputRef.current.click();
        };
    
        const onChange = async event => {
            setLoading(true);
            
            const uploaded = await imageUploader
            .upload(event.target.files[0]);
            setLoading(false);
    
            onFileChange({
                name: uploaded.original_filename,
                url: uploaded.url,
            });
        };
    
        return (
            <div className={styles.container}>
                <input 
                    ref={inputRef}
                    className={styles.input}
                    type="file" 
                    accept="image/*" 
                    name="file" 
                    onChange={onChange}
                />
                {
                    !loading && 
                    <button 
                        className={`${styles.button} ${name ? styles.pink: styles.grey}`} onClick={onButtonClick}>
                        
                        {name || 'No file'}
                        
                    </button>
                }
                {
                    loading && <div className={styles.loading}></div>
                }
            </div>
        ); 
    }
);

export default ImageFileInput;