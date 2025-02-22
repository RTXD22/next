import { CardSpotlight } from "@/components/ui/cardSpotlight";

export function CardSpotlightDemo() {
  return (
    <div className="w-auto relative pb-2 ">
      <CardSpotlight className=" rounded-3xl">
        <h1 className="text-3xl relative font-bold  text-center mt-2 mb-10 text-white">
          Skill
        </h1>
        <div>
          <div className="text-neutral-200 text-center mt-4 relative">
            <h1 className="border rounded-xl relative py-1 font-bold text-black bg-white ">
              FrontEnd
            </h1>
            <ul className="list-none justify-center flex flex-wrap gap-1 mt-5">
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                HTML
              </li>
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                CSS
              </li>
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                JavaScript
              </li>
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                TypeScript
              </li>
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                React.Js
              </li>
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                Next.Js
              </li>
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                TailwindCSS
              </li>
            </ul>
          </div>
          <div className="text-neutral-200 text-center mt-4 relative z-20">
            <div className="border relative rounded-xl px-1 py-1 font-bold text-black bg-white  ">
              BackEnd
            </div>
            <ul className="list-none justify-center px-1 flex flex-wrap gap-1 mt-5">
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                MySQL
              </li>
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                Node.Js
              </li>
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                Laragon
              </li>
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                Herd
              </li>
            </ul>
          </div>
          <div className="text-neutral-200 text-center mt-4 mb-0 relative z-20">
            <h1 className=" border rounded-xl px-1 py-1 font-bold text-black bg-white  ">
              Tools
            </h1>
            <ul className="list-none justify-center flex flex-wrap gap-1 mt-5">
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                VSCode
              </li>
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                Github
              </li>
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                Photoshop
              </li>
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                CorelDraw
              </li>
              <li className="border rounded-xl mb-2 px-1 py-1 font-semibold text-white bg-black">
                Capcut
              </li>
            </ul>
          </div>
        </div>
      </CardSpotlight>
    </div>
  );
}

export function CardSpotlightDemo2() {
  return (
    <div className="w-auto relative pb-2 ">
      <CardSpotlight className=" rounded-3xl">
        <h1 className="text-3xl relative font-bold  text-center mt-2 mb-10 text-white">
          Project
        </h1>
        <div className="text-center relative">Cooming Soon</div>
      </CardSpotlight>
    </div>
  );
}

export function CardSpotlightDemo4() {
  return (
    <div className="w-auto relative pb-2 ">
      <CardSpotlight className=" rounded-3xl">
        <h1 className="text-3xl relative font-bold  text-center mt-2 mb-10 text-white">
          Experience
        </h1>
        <div className="border-l-2 px-5 relative">
          <div className=" text-xl font-semibold pb-1">
            FrontEnd Developer Intern
          </div>
          <div className="pb-2">
            Telkomsel Branch Madiun • Nov 2019 - Apr 2020
          </div>
        </div>
        <br />
        <div className="border-l-2 px-5 relative">
          <div className=" text-xl font-semibold pb-1">
            FrontEnd Developer Intern
          </div>
          <div className="pb-2">LPK Dian Nusantara • Sept 2023 - Sept 2023</div>
        </div>
        <br />
        <div className="border-l-2 pb-1 px-5 relative">
          <div className=" text-xl font-semibold pb-1">
            Mechanic & IT Support
          </div>
          <div className="pb-2">
            AHASS Tanjung Harapan • Aug 2021 - Jan 2024
          </div>
        </div>
        <br />
        <div className="border-l-2 px-5 relative">
          <div className=" text-xl font-semibold pb-1">
            Printing Machine operator
          </div>
          <div className="pb-2">
            PT. Global Way Indonesia • Jan 2024 - Aug 2024
          </div>
        </div>
      </CardSpotlight>
    </div>
  );
}

export function CardSpotlightDemo3() {
  return (
    <div className="w-auto relative ">
      <CardSpotlight className=" rounded-3xl">
        <h1 className="text-3xl relative font-bold  text-center mt-2 mb-10 text-white">
          Education
        </h1>
        <div className="border-l-2 px-5 relative">
          <div className=" text-2xl font-semibold pb-1">
            Software Engineering
          </div>
          <div className="pb-2">SMK Negeri 1 Mejayan • Jan 2019 - Aug 2021</div>
          <div>• Programing and Software development</div>
          <div>• Software project management</div>
          <div>• Analysis of algorithms</div>
          <div>• Software project management</div>
          <div>• Graphic design</div>
        </div>
      </CardSpotlight>
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
