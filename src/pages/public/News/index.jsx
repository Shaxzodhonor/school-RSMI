import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

// images
import imgTest from "../../../assets/images/main2.jpg"
import imgTest3 from "../../../assets/images/main3.jpg"
const News = () => {
  return (
    <>
      <div className="bg-light py-5">
        <div className="container">
      <div className='pb-20 fs-42' style={{paddingTop: "160px"}}>Новости</div>
          <div className="position-relative p-4" style={{aspectRatio: "3 / 1.2", overflow: "hidden"}}>
            <div className="position-absolute top-0 start-0 w-100 h-100 " style={{objectFit: "cover", zIndex: 0}}>
              <img src="https://monitoring.mc.uz/images/home2/news.png" width={"100%"} alt="news"/>
            </div>
            <div className="position-absolute top-0 start-0 text-text1 w-100 h-100 d-flex justify-content-end flex-column px-40 py-32" style={{background: "linear-gradient(83.83deg, rgba(17, 47, 90, 0.81) 2.66%, rgba(9, 42, 91, 0.28) 102.45%)", zIndex: "999"}}>
              <div className="lh-20">
                <i className="fas fa-grip-lines me-2"></i>
                05.24.2022
              </div>
              <div className="fs-38 lh-48 fw-600 mb-3" style={{fontFamily: "LagunaC"}}>Дональд Норман</div>
              <div className="fs-20 w-75 truncate-3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </div>
              <div className="text-end lh-20 mt-2">
                <i className="fas fa-grip-lines me-2"></i>
                Учителям / Ученикам
              </div>
            </div>
          </div>
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            slidesPerGroup={2}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="home-news pb-50"
          >
            {
              [...Array(12)].map((_, key) => (
                <SwiperSlide key={key}>
                  <div className={`border-1 border-start px-20`}>
                    <div className="lh-20 mt-96">
                      <i className="fas fa-grip-lines me-2"></i>
                      05.24.2022
                    </div>
                    <div className='fs-32 mb-16'>Гарри Поттер</div>
                    <div className='truncate-4'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum fugit totam, enim itaque deleniti reprehenderit quam nihil ducimus ipsum ad amet eum ipsa a sapiente, voluptatibus adipisci architecto beatae facere sint, vel accusamus? Exercitationem reprehenderit aperiam ad aut dolore? Adipisci architecto assumenda officiis error incidunt optio culpa itaque doloremque nobis aliquam possimus eos repudiandae nulla quas dolores deserunt repellat, voluptatum voluptatem quam! Beatae quaerat consequatur dolore, eveniet corrupti ex debitis soluta laudantium nisi itaque! Dignissimos minus aspernatur quos voluptatibus cumque!
                    </div>
                    <div className="lh-20 mt-16">
                      <i className="fas fa-grip-lines me-2"></i>
                      Учителям / Ученикам
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>

      <div className="container border-top my-5 pt-5">
        <div className="row gx-5">
          <div className="col-8 border-end">
            <div className="fs-18 lh-20">
              <i className="fas fa-grip-lines text-main2 me-2"></i>
              05.24.2022
            </div>
            <div className='fs-3 fw-700 mb-18' style={{fontFamily: "LagunaC"}}>Знаменитый оркестр для учеников школы исполнитят во дворце Дружбы народов</div>
            <div>
              <img src={imgTest} alt="" width={"100%"}/>
            </div>
            <p className="mt-4 lh-26 font-italic" style={{textAlign: "justify"}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, quisquam iusto neque eum sequi voluptas facere ipsum at dolor. Nisi a obcaecati quam quisquam quas eveniet harum, minima praesentium aperiam ea fuga nostrum culpa possimus officia quae, aspernatur reiciendis omnis assumenda, facilis quibusdam adipisci iusto eaque sequi. Officiis a accusantium voluptates error earum magni omnis impedit dicta, corrupti tempora atque aliquid alias reiciendis rerum, itaque veniam, at nihil dolorum voluptas! Eligendi excepturi fugit, a qui labore voluptate vero. Omnis voluptate possimus commodi ab temporibus nisi, sapiente fuga nemo, magnam fugit dolore saepe nobis harum impedit. Nisi enim et amet accusamus fugit nihil officiis explicabo architecto assumenda eaque distinctio alias temporibus ipsa laudantium placeat illum possimus repellat dolores soluta corporis accusantium eligendi modi, aliquam error. Ullam distinctio, error voluptates accusantium eum minus quam reprehenderit laborum pariatur neque deserunt harum asperiores sunt eaque quas perferendis illo architecto! Dolorum nesciunt expedita quis laborum magnam debitis natus. Illum consectetur ratione quam ullam recusandae omnis. Exercitationem, optio debitis repellendus quos eaque quaerat, expedita fugiat nostrum laborum, rem iure quae? Unde aut sint expedita iure! Dolor reiciendis laboriosam exercitationem magnam, maiores nesciunt possimus placeat eos quos eligendi dicta vero laudantium libero ab, rem minima deleniti aliquid ad nemo quia inventore ipsam tenetur at quaerat? Qui quia deserunt, saepe libero perferendis rerum aperiam, nemo laboriosam, quam enim eos hic quod sit. Unde consectetur possimus necessitatibus quam. Molestias totam ipsa minus autem perspiciatis quaerat aut enim officia nobis magni exercitationem architecto maiores sint impedit excepturi numquam velit nisi corporis, voluptatibus eveniet assumenda rem. Voluptas libero beatae perferendis quis, quaerat quam reprehenderit architecto dolorum consectetur cumque deleniti et facere excepturi maiores tempora fugit amet nostrum. Iure inventore commodi tenetur ullam nesciunt sint architecto animi dolore dolorem pariatur recusandae consequuntur aliquam excepturi, ut numquam quia deleniti voluptatum eligendi, ipsa molestias asperiores repudiandae earum harum ea. Libero nobis quidem placeat expedita, laborum, cumque labore eligendi quisquam incidunt recusandae quaerat consequatur fugiat modi doloribus esse est tenetur quam deleniti velit blanditiis nostrum magnam. Iure enim ab sequi? Est dicta alias nulla reiciendis nesciunt suscipit modi neque temporibus libero, iste dolores, quibusdam quam obcaecati sit ipsa ut dolor necessitatibus aliquid cum officiis, doloribus ab labore dolorum totam. Soluta sed nobis consequatur. Saepe perspiciatis vero error? Quae commodi soluta corrupti harum amet distinctio natus! Illo vel placeat voluptates, amet qui accusamus officia illum saepe cumque quam. In tempore reprehenderit aspernatur, eum minima non vel reiciendis ea molestiae dicta accusantium ullam exercitationem eveniet quaerat nam nobis. Architecto reprehenderit ratione, cumque sint fugit natus fugiat aspernatur. Sint commodi assumenda placeat illo ab eveniet? Officia quod excepturi, eos veritatis totam eius consequatur autem neque, cum beatae aperiam minima fugit in laudantium distinctio! Soluta repellendus velit quia explicabo, aliquam suscipit asperiores ea corporis aut dolore minus culpa reiciendis officia. Blanditiis enim consequatur dolorem tenetur dicta! Quo quis consequatur doloribus laboriosam aliquam necessitatibus at, ad eaque inventore in? Facere dolores quae, itaque voluptates quaerat facilis aspernatur doloribus minus sit dolore, error, aliquid aut voluptatem voluptas accusantium laudantium quod non. Repudiandae perferendis autem soluta sequi natus rem quis dolor error est quisquam odit et libero, sit dicta distinctio quia aliquid. Consectetur assumenda aliquam tempore praesentium cumque illo asperiores accusamus ex ipsum officia molestias quaerat nam amet voluptatibus exercitationem error magnam illum sapiente, dolor in sed reiciendis blanditiis. Vero facilis quam magni voluptate laboriosam minima quae alias aut quisquam inventore repudiandae sed iure tenetur minus sequi, eligendi nemo delectus quibusdam vel officiis dolore quasi perferendis ab suscipit! Praesentium aliquid distinctio soluta! Asperiores fugiat repudiandae beatae. Possimus odio numquam fugit ducimus dolorum aut illo esse quae nisi nihil! Odit, obcaecati quas? Fugiat vel odit nulla, a corporis debitis necessitatibus aliquam, quo nam esse veniam voluptas fugit possimus. Sunt est error commodi obcaecati vitae assumenda distinctio molestiae nemo deserunt culpa, sequi quas omnis enim in aliquam magni quo corporis recusandae voluptas, aspernatur aut? Minima ea dolor id nobis, iusto earum distinctio eveniet dolorem? Similique tempore dolores ad perferendis. Non ratione itaque magni! Optio dicta corrupti, molestias ad similique eaque laboriosam, ratione molestiae, laborum quasi cupiditate sunt. Quia doloribus modi nihil velit dignissimos! Maxime, provident non molestiae debitis ipsa, cum recusandae consequuntur at perspiciatis numquam iusto cumque, natus distinctio quidem aliquid laboriosam eveniet autem corporis nam reprehenderit eaque dignissimos eligendi hic accusamus. Eius molestiae, ad excepturi atque alias, dolore maxime facere, totam adipisci vitae tempora? Nulla perspiciatis sapiente qui eum id provident quisquam mollitia consequuntur. Illo assumenda ipsam enim. Aliquam similique placeat vitae maxime odit minima laboriosam dolorem dolorum sequi impedit sed neque beatae ex explicabo expedita saepe, omnis eligendi minus amet inventore? Ipsam voluptatem unde totam laborum. Eum eius similique placeat, doloremque mollitia rem facere ad minus magnam maxime voluptas, deleniti fugit assumenda minima expedita quam hic dolore libero esse blanditiis consectetur repudiandae harum voluptatem quas! Officia laborum asperiores libero repellendus deserunt veniam eaque iste quasi, commodi ducimus laboriosam error suscipit molestiae impedit modi at fugiat earum dicta sint numquam sed aspernatur magni vitae! Minima totam saepe sunt illum, tenetur eligendi exercitationem obcaecati molestiae! At quidem, saepe autem quibusdam animi recusandae blanditiis quo ipsum iste. Quis, culpa id reiciendis ratione maxime dolore autem eum ex laudantium sint nam quo voluptas eveniet inventore delectus porro? Molestiae omnis exercitationem delectus voluptates rerum illo doloribus, velit, ullam nihil, maiores eveniet blanditiis aut error quo obcaecati consectetur! Facilis rerum incidunt repudiandae ipsam ad explicabo autem ex optio nemo, eius inventore, perferendis exercitationem! Quod quaerat sunt deleniti in.
            </p>
          </div>
          <div className="col-4">
            {
              [...Array(3)].map(() => (
                <div className="border-bottom py-4" style={{textAlign: "center"}}>
                  <div className="lh-20">
                    <i className="fas fa-grip-lines text-main2 me-2"></i>
                    05.24.2022
                  </div>
                  <div className='fs-32 mb-16'>Гарри Поттер</div>
                  <div className='truncate-4'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum fugit totam, enim itaque deleniti reprehenderit quam nihil ducimus ipsum ad amet eum ipsa a sapiente, voluptatibus adipisci architecto beatae facere sint, vel accusamus? Exercitationem reprehenderit aperiam ad aut dolore? Adipisci architecto assumenda officiis error incidunt optio culpa itaque doloremque nobis aliquam possimus eos repudiandae nulla quas dolores deserunt repellat, voluptatum voluptatem quam! Beatae quaerat consequatur dolore, eveniet corrupti ex debitis soluta laudantium nisi itaque! Dignissimos minus aspernatur quos voluptatibus cumque!
                  </div>
                  <div className="lh-20 mt-16">
                    <i className="fas fa-grip-lines text-main2 me-2"></i>
                    Учителям / Ученикам
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default News;