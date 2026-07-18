import GTA from '../assets/GTA.webp'
import GTAV from '../assets/GTAV.webp'
import GTAOn from '../assets/GTAOn.webp'
import RedDead from '../assets/RedDead.webp'
import RedDeadII from '../assets/RedDeadII.webp'
import Car from '../assets/Car.webp'
import GTAVI from '../assets/GTAVI.webp'
import Baner from '../assets/Baner.webp'
import fullLogo from '../assets/Logo (1).svg'
import Site from '../assets/Site.webp'
import Background from '../assets/Background.webp'
import GameCard from './GameCard'

function MainPage() {
    return (
        <>
            <div className="flex flex-col items-center gap-10 lg:gap-20 font-helvetica overflow-x-hidden">
                <img src={GTA} alt="Grand Theft Auto banner artwork" className="w-full h-auto object-fill" />

                <div className="w-full flex flex-col gap-8 lg:gap-16 px-4 lg:px-0 lg:w-auto">
                    <div className="w-full lg:max-w-[1600px] flex flex-col gap-3 items-start lg:flex-row lg:justify-between lg:items-center">
                        <h1 className="text-2xl lg:text-5xl font-extrabold">Jogos em Destaque</h1>

                        <div className="flex flex-wrap gap-2 lg:gap-5">
                            <button className="bg-[#606060] rounded-full px-3 py-1 text-xs lg:px-4 lg:text-base transition-colors duration-300 ease-in-out hover:bg-[#3d3d3d]">PC</button>
                            <button className="bg-[#606060] rounded-full px-3 py-1 text-xs lg:px-4 lg:text-base transition-colors duration-300 ease-in-out hover:bg-[#3d3d3d]">Console</button>
                            <button className="bg-[#606060] rounded-full px-3 py-1 text-xs lg:px-4 lg:text-base transition-colors duration-300 ease-in-out hover:bg-[#3d3d3d]">Dispositivos Portáteis</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:flex lg:gap-10">
                        <img src={GTAV} alt="Grand Theft Auto V cover art" className="w-full aspect-[260/315.85] object-cover rounded-lg lg:w-[260px] lg:h-[315.85px] lg:rounded-[16px]" />
                        <img src={GTAOn} alt="GTA Online cover art" className="w-full aspect-[260/315.85] object-cover rounded-lg lg:w-[260px] lg:h-[315.85px] lg:rounded-[16px]" />
                        <img src={RedDead} alt="Red Dead Redemption cover art" className="w-full aspect-[260/315.85] object-cover rounded-lg lg:w-[260px] lg:h-[315.85px] lg:rounded-[16px]" />
                        <img src={RedDeadII} alt="Red Dead Redemption II cover art" className="w-full aspect-[260/315.85] object-cover rounded-lg lg:w-[260px] lg:h-[315.85px] lg:rounded-[16px]" />
                    </div>

                    <button className="mx-auto flex items-center justify-center text-sm lg:text-xl font-semibold text-black bg-[#FCAF17] w-[200px] h-[48px] lg:w-[260px] lg:h-[63px] rounded-[8px] transition-colors duration-300 ease-in-out hover:bg-[#c7880c]">
                        Ver todos os jogos
                    </button>
                </div>

                <div className="w-full lg:mx-auto lg:w-fit flex flex-col gap-6 lg:gap-8 px-4 lg:px-0">
                    <h2 className="text-2xl lg:text-5xl font-extrabold">Últimas Notícias</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:hidden">
                        <GameCard image={GTAVI} title="Grand Theft Auto VI - Veja o 1º trailer agora" publisher="Rockstar Games" date="5 de dezembro de 2023" size="sm" />
                        <GameCard image={Baner} title="1º Trailer. Terça-feira, 5 de Dezembro. 9h Et." publisher="Rockstar Games" date="1 de dezembro de 2023" size="sm" />
                        <GameCard image={Car} title="Nova atualização de GTA Online chegando em dezembro" publisher="GTA Online" date="30 de novembro de 2023" size="sm" />
                    </div>

                    <div className="hidden lg:flex gap-10">
                        <GameCard image={GTAVI} title="Grand Theft Auto VI - Veja o 1º trailer agora" publisher="Rockstar Games" date="5 de dezembro de 2023" size="lg" />

                        <div className="flex flex-col gap-10">
                            <GameCard image={Baner} title="1º Trailer. Terça-feira, 5 de Dezembro. 9h Et." publisher="Rockstar Games" date="1 de dezembro de 2023" size="sm" />
                            <GameCard image={Car} title="Nova atualização de GTA Online chegando em dezembro" publisher="GTA Online" date="30 de novembro de 2023" size="sm" />
                        </div>
                    </div>
                </div>

                <div
                    className="relative w-full lg:w-[1160px] h-auto lg:h-[535px] mx-4 lg:mx-0 bg-cover bg-center rounded-2xl overflow-hidden"
                    style={{ backgroundImage: `url(${Background})` }}
                >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center h-full pl-6 pr-6 py-8 lg:pl-[76px] lg:pr-0 lg:py-0">
                        <div className="flex flex-col gap-6 lg:gap-12 z-10 w-full lg:w-auto">
                            <div className="flex items-center gap-3 lg:gap-[23px]">
                                <img src={fullLogo} alt="Games Launcher logo" className="w-[60px] h-[55px] lg:w-[137.64px] lg:h-[126.74px]" />

                                <span className="text-2xl lg:text-[41.57px] font-extrabold text-black w-[160px] lg:w-[250px] leading-none">
                                    Games Launcher
                                </span>
                            </div>

                            <div className="flex flex-col gap-6 lg:gap-[70px]">
                                <p className="text-lg lg:text-[32px] font-medium w-full lg:w-[290px] text-black leading-tight">
                                    Todos os seus jogos em um só lugar.
                                </p>

                                <button className="flex items-center justify-center shadow-lg text-base lg:text-xl font-semibold text-black bg-[#FCAF17] w-[160px] h-[48px] lg:w-[260px] lg:h-[63px] rounded-[8px] transition-colors duration-300 ease-in-out hover:bg-[#c7880c]">
                                    Download
                                </button>
                            </div>
                        </div>

                        <img
                            src={Site}
                            alt="Games Launcher application preview"
                            className="static mt-6 w-full h-[200px] object-cover rounded-xl lg:absolute lg:mt-0 lg:right-0 lg:top-0 lg:h-full lg:w-[660px] lg:object-contain lg:rounded-none"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage