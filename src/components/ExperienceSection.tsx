import * as React from "react";
import ExperiencePoint from "./ExperiencePoint";

const EXPERIENCE_DATA = [
  {
    title: "Software Development Engineer",
    subtitle: "Locofast pvt ltd, New Delhi",
    duration: "01/04/2022 - 08/09/2023",
    description:
      "sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc",
  },
  {
    title: "Bachelors in Engineering",
    subtitle: "Chitkara University, Punjab",
    duration: "10/08/2019 - 10/06/2023",
    description:
      "sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc",
  },
  {
    title: "XII- Science",
    subtitle: "Springdales Public School, Punjab",
    duration: "01/04/2022 - 08/09/2023",
    description:
      "sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc sds  sdsd sdbhb asdvhbzdfv aLSHDbvclHSAJD DcbDL cbdh  adscsdc",
  },
];

const ExperienceSection = () => {
  return (
    <section className="md:grid md:grid-cols-2 md:pb-16">
      <h1 className="text-left col-span-2 md:text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-14">
        Experience & Education
      </h1>
      {EXPERIENCE_DATA.map((item, index) => (
        <>
          {index % 2 !== 0 && (
            <div className="flex-1 hidden md:block border-r-2 p-10 py-12 border-[#adb7be]">
              <p className="text-[#adb7be] text-sm mt-2 text-right">{item.description}</p>
            </div>
          )}
          <ExperiencePoint key={index} index={index} {...item} />
          {index % 2 === 0 && (
            <div className="flex-1 hidden md:block p-10 py-12">
              <p className="text-[#adb7be] text-sm mt-2">{item.description}</p>
            </div>
          )}
        </>
      ))}
    </section>
  );
};

export default ExperienceSection;
