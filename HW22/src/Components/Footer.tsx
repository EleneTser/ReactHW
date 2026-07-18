import Logo3 from '../assets/Logo (2).svg'
import twitch from '../assets/twitch.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
 
function Footer() {
 
    return (
        <>
            <div className="w-full bg-black flex flex-col md:flex-row items-center md:justify-between gap-6 px-4 sm:px-6 md:px-10 py-6 font-helvetica">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                    <img src={Logo3} alt="Logo" className="w-[48px] h-[44px] md:w-[60px] md:h-[55.25px]" />
 
                    <div className="flex flex-col gap-1 items-center sm:items-start">
                        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-6">
                            <p className="text-white text-sm md:text-[16px] font-semibold tracking-wide cursor-pointer hover:text-gray-300">CONTATO</p>
                            <p className="text-white text-sm md:text-[16px] font-semibold tracking-wide cursor-pointer hover:text-gray-300">SOBRE</p>
                            <p className="text-white text-sm md:text-[16px] font-semibold tracking-wide cursor-pointer hover:text-gray-300">SUPORTE</p>
                            <p className="text-white text-sm md:text-[16px] font-semibold tracking-wide cursor-pointer hover:text-gray-300">EMPREGOS</p>
                        </div>
                        <p className="text-gray-500 text-xs md:text-[13px]">©2023 Rockstar Games, Inc.  -  YWR Studio</p>
                    </div>
                </div>
 
                <div className="flex items-center gap-4 md:gap-5">
                    <img src={twitch} alt="Twitch" className="w-5 h-5 md:w-[24px] md:h-[24px] cursor-pointer opacity-90 hover:opacity-100" />
                    <img src={Instagram} alt="Instagram" className="w-5 h-5 md:w-[24px] md:h-[24px] cursor-pointer opacity-90 hover:opacity-100" />
                    <img src={twitter} alt="Twitter" className="w-5 h-5 md:w-[24px] md:h-[24px] cursor-pointer opacity-90 hover:opacity-100" />
                    <img src={youtube} alt="Youtube" className="w-5 h-5 md:w-[24px] md:h-[24px] cursor-pointer opacity-90 hover:opacity-100" />
                    <img src={facebook} alt="Facebook" className="w-5 h-5 md:w-[24px] md:h-[24px] cursor-pointer opacity-90 hover:opacity-100" />
                </div>
            </div>
        </>
    );
}
 
export default Footer;
 