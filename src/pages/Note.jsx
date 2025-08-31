import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useForm } from "react-hook-form"
import { supabase } from '../supabase';
import { useState } from 'react';
import BackButton from '../components/BackButton';
import "../styles/Note.css"

function Note() {
    const {
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [purpose, setPurpose] = useState("");
    const [advice, setAdvice] = useState("");
    const [review, setReview] = useState("");   
    
    const onSubmit = async () => {
        const now = dayjs();
        const timeInTokyo = now.tz('Asia/Tokyo');
        const date = timeInTokyo.format('YYYY/MM/DD'); 
        await supabase.from('Note').insert({ name, title, purpose, advice, review, date });
        setName("");
        setTitle("");
        setPurpose("");
        setAdvice("");
        setReview("");
    }

    dayjs.extend(utc);
    dayjs.extend(timezone);

    return(
        // <div className="backGround">
        <div style={{width: "100vw", height: "100vh", position: 'relative', background: '#F4ECE5', overflow: 'hidden'}}>
            <div>
                <div className="labelName">
                    <BackButton />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='noteContent'>
                            <div>
                                <label htmlFor='name'>
                                    名前
                                </label>
                                <br/>
                                <input
                                    id='name'
                                    type='text'
                                    placeholder='ここに名前を記入'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor='title'>
                                    旅のタイトル
                                </label>
                                <input
                                    id='title'
                                    type='text'
                                    placeholder='ここにタイトルを記入'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor='purpose'>
                                    旅の目的
                                </label>
                                <input
                                    id='purpose'
                                    type='text'
                                    placeholder='ここに旅の目的を記入'
                                    value={purpose}
                                    onChange={(e) => setPurpose(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor='advice'>
                                    旅のアドバイス
                                </label>
                                <input
                                    id='advice'
                                    type='text'
                                    placeholder='ここに旅のアドバイスを記入'
                                    value={advice}
                                    onChange={(e) => setAdvice(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor='review'>
                                    旅の感想
                                </label>
                                <input
                                    id='review'
                                    type='text'
                                    placeholder='ここに旅の感想を記入'
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit">きろくする</button>
                    </form>
                </div>    
            </div>
        </div>
    );
};
export default Note;