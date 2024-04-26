import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Footer(){
    
    return(
        <div >
            <div className="mt-[4%] mx-[6%]">
                <p className="text-xl font-semibold text-[#EAAB40] pb-4">Maxwell</p>
                
                <div className="md:flex justify-between">
                    <div className="flex">
                        <div className="">
                            <Image
                            src="/fb.svg"
                            alt="fb icon"
                            width={40}
                            height={40}
                            />
                        </div>
                        <div className="px-12">
                            <Image
                            src="/x.svg"
                            alt="fb icon"
                            width={40}
                            height={40}
                            />
                        </div>
                        <div className="">
                            <Image
                            src="/mail.svg"
                            alt="fb icon"
                            width={40}
                            height={40}
                            />
                        </div>
                        <div className="pl-12">
                            <Image
                            src="/whatsapp.svg"
                            alt="fb icon"
                            width={40}
                            height={40}
                            />
                        </div>
                    </div>

                    <div className={`black mt-4 md:mt-0`}>
                        <h2><Link href="#about-content">About us</Link></h2>
                        <h2 className="py-4"><Link href="#contact-us">Contact us</Link></h2>
                        <h2>Privacy policy</h2>
                    </div>
                </div>

                <div className={` my-8 flex justify-center  black} pb-8`}>
                Powered by <Link target="_blank" href={"https://raoatech.com/"} className="ml-1"><span> Raoatech</span> </Link>
                </div>
            </div>
        </div>
    )
}