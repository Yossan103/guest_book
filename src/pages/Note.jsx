function Note() {
    return(
        <div>
            <form action=''>
                <div>
                    <label htmlFor='name'>
                        名前
                    </label>
                    <input
                        id='name'
                        type='text'
                        placeholder='ここに名前を記入'
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
                    />
                </div>

               
            </form>
        </div>
      
      
    );
};
export default Note;