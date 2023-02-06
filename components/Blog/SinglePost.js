import Image from "next/image";
import React from "react";

const SinglePost = () => {
  return (
    <section className="screen-center text-black">
      <p className="h2-text text-pri_dark font-[700] my-5">Blog</p>
      <div className=" items-center my-10 flex gap-x-2 md:gap-x-10">
        <div>
          <Image
            src="/images/blog/author.png"
            alt="author name"
            placeholder="blur"
            className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] rounded-full image-cover "
            width={100}
            height={100}
            blurDataURL="#f2f2f2"
          />
        </div>
        <p className="p-text font-[600]">James WheelChair</p>
        <p className="p-tiny-text">3 minutes of reading time</p>
      </div>
      <div className="">
        <p className="big-text font-[900] text-pri_dark">
          The Need for Premium Fast Deliveries
        </p>
        <div className="md:w-[80%] md:ml-auto my-5">
          <p className="h2-text text-pri_dark my-5 font-[700]">
            Lorem ipsum dolor it ame consectetur.
          </p>
          <p className="text-black p-text text-justify">
            Lorem ipsum dolor sit amet consectetur. Pharetra bibendum in natoque
            pretium tempus. Senectus mauris habitant diam aliquam placerat donec
            pellentesque dui non. Urna metus quis pharetra integer diam. Viverra
            suspendisse molestie feugiat ut diam ornare non. Nisl et aenean enim
            scelerisque enim. Proin ornare sollicitudin commodo gravida gravida.
            Quisque quis lorem id magna erat feugiat phasellus viverra. Quam eu
            nisl gravida donec elit. Lorem amet eu at at est massa. Dui nibh ac
            blandit molestie quisque molestie lorem quam tellus. Suspendisse
            pharetra libero purus id sed aliquam. Pharetra feugiat consequat
            venenatis orci dictum in condimentum nullam mauris. Egestas at
            suspendisse fames turpis est egestas ipsum. Integer eu at sagittis
            imperdiet quis urna nunc odio vestibulum. Aliquam et tellus sapien
            faucibus amet. Aenean dignissim nisl eget dis nulla. Commodo nibh
            vitae facilisi nibh. Volutpat nulla eget bibendum pharetra tempor
            netus mauris non. Et sagittis vulputate lacus mi montes in
            penatibus. Facilisis consequat sagittis morbi nunc vel euismod. Eget
            sed vel quam tincidunt consectetur. Aliquet eu phasellus morbi a
            tristique volutpat aliquam. Ridiculus malesuada malesuada urna a
            ultricies facilisis elit consequat. Risus nec pellentesque eu nunc
            arcu at ridiculus ut. Consequat magna eget ut ornare dictum sed et
            auctor. Euismod porttitor leo neque neque hac purus ipsum eget
            dolor. Ullamcorper sodales tortor nullam tempus ac quam. Convallis
            morbi maecenas nisl volutpat pharetra viverra tellus nulla
            adipiscing. Parturient mus tempus lobortis a. Vulputate nunc sit id
            ut pulvinar eget vulputate. Porttitor orci imperdiet ut lorem urna
            id. Viverra ultrices nisl vulputate vel vitae at suspendisse
            volutpat tortor. At ipsum pellentesque duis id tristique. Eget
            ultrices integer tempus natoque sit venenatis nisi nisl. At diam
            aliquam quam mattis nisl mattis urna arcu phasellus. Ultrices justo
            magna nascetur ac molestie vitae nibh maecenas. Nisl nisi quis nam
            aliquam mi nunc. Libero lectus erat eget nam orci diam id. Eget
            scelerisque risus et etiam mauris sed viverra duis tellus. Id
            porttitor adipiscing dignissim sagittis fermentum nulla amet sit
            dapibus. Eget fermentum tellus id interdum magna nec orci. Pulvinar
            tristique a massa enim. Nisl mi bibendum dignissim a donec urna.
            Gravida sagittis vitae leo felis lobortis. Tortor consectetur congue
            faucibus id a cras habitant lectus.
          </p>
          <p className="p-text text-[#3B3C3C] mt-5">-Feb 2022</p>
        </div>
      </div>
      <hr className=" hidden lg:block  border-pri_dark border-t-2 w-full my-10 bottom-[3%] left-[10%]"></hr>
    </section>
  );
};

export default SinglePost;
