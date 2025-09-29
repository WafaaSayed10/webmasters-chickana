import Head from "next/head"
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { useState } from 'react';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { sendPasswordResetEmail } from 'firebase/auth';

export default function Login(){
    //https://console.firebase.google.com/project/pizza-72465/authentication/providers
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [error, setError]= useState('')
    const [message, setMessage] = useState('');
    const [errorPassReset, setErrorPassReset] = useState('');
    const [openReset, setOpenReset] = useState(false);
    const router= useRouter()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(email.trim ==='' || password.trim() ===''){
            setError("Invalid email or password")
            return;
        }
        try{
            await signInWithEmailAndPassword(auth, email, password)
            toast.success("Logged in successfully.", {
                position: 'top-center',
            })
            router.push("/");
        }
        catch(error){
            /*alert(error.message)*/
            setError("Invalid email or password")
        }
    }
    const handleReset = async (e) => {
        e.preventDefault();
        setMessage('');
        setErrorPassReset('');
        const actionCodeSettings = {
            url: 'http://localhost:3001',
            //https://your-project-name.vercel.app/login
            //must add this domain in firebase
            handleCodeInApp: false,
        };
        try {
            await sendPasswordResetEmail(auth, email, actionCodeSettings);
            setMessage('Password reset link has been sent');
        } catch (err) {
            setError("Invalid email");
        }
    };
    return(
        <>
        <Head>
            <title>Login - Chickana dd</title>
            <meta name="description" content="chickana login" />
        </Head>
        <main>
            <div className="bg-gray-100 p-[30px] sm:p-[80px]">
                {!openReset&&<form onSubmit={handleSubmit} className="max-w-[400px] sm:w-[400px] m-auto bg-[#fff] px-[25px] py-[15px] flex flex-col gap-[15px] rounded-[5px] shadow-sm">
                    <h1 className="text-[25px] text-[#372b27]">Log In</h1>
                    <div className="flex">
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" name="email" placeholder="Email" autoComplete="email" className="px-[10px] py-[5px] border rounded-tl-[5px] rounded-bl-[5px] w-full" />
                        <div className="p-[12px] bg-gray-200"><FaUser /></div>
                    </div>
                    <div className="flex">
                        <input onChange={(e)=>setPassword(e.target.value)} value={password}  type="password" name="password" placeholder="Password" autoComplete="current password" className="px-[10px] py-[5px] border rounded-tl-[5px] rounded-bl-[5px] w-full" />
                        <div className="p-[12px] bg-gray-200"><FaLock /></div>
                    </div>
                    {/**<label className="flex gap-[5px] itemscenter text-[14px]">
                        <input type="checkbox"/>
                        Remember me
                    </label>**/}
                    {error&&<p className="text-[13px] text-red-500">{error}</p>}
                    <button type="submit" className="bg-black text-[#fff] text-[17.5px] font-semibold p-[10px] rounded-[5px]">Login</button>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-[15px]">
                        <p className="self-start sm:self-center text-[14px] hover:underline transition duration-300 cursor-pointer" onClick={()=>setOpenReset(true)}>Forget password?</p>
                        <Link href="/register" className="text-center border w-full sm:w-1/2 p-[10px] text-[17.5px] font-semibold rounded-[5px] border-[#6d6461] text-[#6d6461] hover:text-[#fff] hover:bg-[#6d6461] transition duration-300">Register</Link>
                    </div>
                </form>}
                {/*عايزة افصل الجزء ده واحطه في صفحة تانية وعشان اعمل اكسيز على الايميل هحطه في كونتكيست*/}
                {openReset&&<form onSubmit={handleReset} className="max-w-[400px] sm:w-[400px] m-auto bg-[#fff] px-[25px] py-[15px] flex flex-col gap-[15px] rounded-[5px] shadow-sm">
                    <h2 className="text-[23px] text-[#372b27]">Enter your email</h2>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" name="email" placeholder="Email" autoComplete="email" className="px-[10px] py-[5px] border rounded-tl-[5px] rounded-bl-[5px] w-full" />
                    {error&&<p className="text-[13px] text-red-500">{error}</p>}
                    {message&& <p className="text-[13px] text-green-500">{message}</p>}
                    <button type="submit" className="bg-black text-[#fff] text-[17.5px] font-semibold p-[10px] rounded-[5px]">Reset Password</button>
                </form>}
            </div>
        </main>
        </>
    )
}