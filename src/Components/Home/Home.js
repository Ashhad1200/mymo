
import Features from "../Features";

const Home = () => {
    return (


        <>
            <div class="relative flex flex-col items-center justify-start gap-8">
                <div class="flex flex-col items-center gap-4">
                    <div class="max-w-xs text-center text-3xl font-semibold lg:max-w-3xl lg:text-6xl">Upgrade your productivity to the next level</div>
                    <div class="max-w-xs text-center text-sm text-primary lg:max-w-md">Effective Management Strategies to Drive Success and Boost Productivity: A Comprehensive Guide</div>
                </div>
                <div>
                    <a target="_blank" rel="noreferrer" href="https://app.mymo.work"><button class="items-center justify-center text-sm font-medium bg-primary text-primary-foreground shadow h-10 rounded-md px-8 flex gap-3"><div>Get Started</div></button></a>
                </div>
            </div>
            <div class="flex flex-col items-center gap-4">
                <div class="aspect-square items-center justify-center rounded-3xl border border-white/20 hidden h-[550px] w-[1150px] lg:flex mt-4" >
                    <img src="https://www.mymo.work/app-scrn1.webp" alt="" class="h-full w-full object-contain"></img>
                </div>
            </div>
            <div class="relative flex flex-col items-center justify-start gap-8 mt-52">
                <div>
                    <a target="_blank" rel="noreferrer" href="https://app.mymo.work"><button class="items-center justify-center text-sm font-medium bg-primary text-primary-foreground shadow h-10 rounded-md px-8 flex gap-3"><div>View Features</div></button></a>
                </div>
                <div class="flex flex-col items-center gap-4">
                    <div class="max-w-xs text-center text-3xl font-semibold lg:max-w-3xl lg:text-6xl">Key features that will elevate your productivity</div>
                </div>
            </div>


            <div class="flex flex-col items-center gap-4 mt-20">
            <Features />
            </div>

            <div class="relative flex flex-col items-center justify-start gap-8 mt-10">
                <div>
                    <a target="_blank" rel="noreferrer" href="https://app.mymo.work"><button class="items-center justify-center text-sm font-medium bg-primary text-primary-foreground shadow h-10 rounded-md px-8 flex gap-3"><div>View Integrations</div></button></a>
                </div>
                <div class="flex flex-col items-center gap-4">
                    <div class="max-w-xs text-center text-3xl font-semibold lg:max-w-3xl lg:text-6xl">Integrations with your favorite platforms!</div>
                </div>
            </div>

            <div class="flex flex-col items-center gap-4">
                <div class="aspect-square items-center justify-center rounded-3xl border border-white/20 hidden h-[550px] w-[1150px] lg:flex mt-4" >
                    <img src="https://app.mymo.work/carousel-4.png" alt="" class="h-full w-full object-contain"></img>
                </div>
            </div>

            <div class="relative flex flex-col items-center justify-start gap-8 mt-16">
                <div class="flex flex-col items-center gap-4">
                    <div class="max-w-xs text-center text-3xl font-semibold lg:max-w-3xl lg:text-6xl">Streamlined Communication</div>
                    <div class="max-w-xs text-center text-sm text-primary lg:max-w-md">With the inbox, you can efficiently manage your incoming messages, prioritize important conversations, and respond promptly.</div>
                </div>
                <div class="aspect-square items-center justify-center rounded-3xl border border-white/20 hidden h-[550px] w-[1150px] lg:flex mt-4" >
                    <img src="https://www.mymo.work/app-scrn2.webp" alt="" class="h-full w-full object-contain"></img>
                </div>
            </div>
        </>

    );
}

export default Home;