import emailjs from 'emailjs-com';
import Button from '@mui/material/Button';

const Email = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm()
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    };
    
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `kdd_cv.pdf`;
        link.href = "kdd_cv.pdf";
        link.click();
    };
    return ( 
        <div className=" flex justify-center mt-40 font-mono flex-col text-center" id="end">
            <h1 className="text-3xl mb-5">Get in touch</h1>
            <p>(daniel.kozma13@gmail.com)</p>
            <div class="w-full flex justify-center mt-10 flex-row text-xl">
                <div >
                    <form class="bg-slate-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" onSubmit={sendEmail}>
                        <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="username">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="user_name" type="text" placeholder="Username"/>
                        </div>
                        <div class="mb-6">
                        <label class="block text-gray-700 font-bold mb-2" for="password">
                            E-mail
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="user_email" type="text" placeholder="E-mail"/>
                        </div>
                        <div class="mb-6">
                        <label class="block text-gray-700 font-bold mb-2" for="message">
                            Message
                        </label>
                        <textarea class="h-40 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="message" type="text" placeholder="Message"/>
                        </div>
                        <div class="flex items-center justify-between">
                        <input type="submit" value="Send" className='text-black hover:text-green-600'/>
                        </div>
                    </form>
                </div>      
                <div className='flex h-max'><Button onClick={onDownload} sx={{
                                    color: 'white',
                                    backgroundColor: 'black',
                                    borderRadius: '10px',
                                    fontSize: '1.5rem',
                                    "&:hover": {
                                        backgroundColor: 'white',
                                        color: 'black',
                                    }
                                }}
                                variant="contained"
                                >Resume</Button></div>
                </div>
        </div>
    );
}
 
export default Email;