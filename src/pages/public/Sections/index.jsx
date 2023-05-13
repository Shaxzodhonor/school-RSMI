import section1 from "../../../assets/images/sec2.png"

import samplePDF from './sample.pdf';
import AllPages from "./p";

import { useState } from "react";
import "./style.scss"

import test from "../../../assets/images/compus.jpg"
const Sections = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      {/* <div className='pb-30 fs-96 lh-96 container' style={{paddingTop: "160px"}}>Общее оброзование</div> */}
     
      <div className="row gx-0" style={{paddingTop: "160px"}}>
        <div className="col-7 ">
          <img src={section1} alt="" width={"100%"}/>
        </div>
        <div className="col-5">
          <div className='bg-darkblue2 h-100 d-flex flex-column justify-content-center px-96 text-text1'>
            <div className='fs-32 lh-40 mb-20'>Такой лёгкий малумот:</div>
            <p className='lh-30'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nulla ratione in animi atque repellat illo nemo, pariatur architecto, modi adipisci a maxime quia quibusdam at, non perferendis sit molestias?
            </p>
          </div>
        </div>
      </div>

      <div className="row gx-0 border-1 border-bottom border-top">
        <div className="col-7 d-flex flex-column align-items-center border-1 border-end">
          <div className='mt-30 fs-32 fw-500 lh-40 mb-20'>Преподователи:</div>
          <ul className='mb-30 ps-30 fst-italic fs-18'>
            <li className="my-2">Комисаренко Степан Сергеевич</li>
            <li className="my-2">Комисаренко Степан Сергеевич</li>
            <li className="my-2">Комисаренко Степан Сергеевич</li>
            <li className="my-2">Комисаренко Степан Сергеевич</li>
            <li className="my-2">Комисаренко Степан Сергеевич</li>
            <li className="my-2">Комисаренко Степан Сергеевич</li>
            <li className="my-2">Комисаренко Степан Сергеевич</li>
            
            <li className="my-2">Комисаренко Степан Сергеевич</li>
            <li className="my-2">Комисаренко Степан Сергеевич</li>
            <li className="my-2">Комисаренко Степан Сергеевич</li>
            <li className="my-2">Комисаренко Степан Сергеевич</li>
            <li className="my-2">Комисаренко Степан Сергеевич</li>
          </ul>
        </div>
        <div className="col-5 text-text1 bg-darkblue3">
        <div className='mt-30 ps-70 fs-32 fw-500 lh-40 mb-20'>Предметы:</div>
          <ul className='mb-30 ps-70 fs-18 fst-italic'>
            <li className="my-2">Изобразительное искуство</li>
            <li className="my-2">Черчение</li>
            <li className="my-2">Математика</li>
            <li className="my-2">Лепка</li>
            <li className="my-2">Ганчарство</li>
            <li className="my-2">Рисовка маслом</li>
          </ul>
        </div>
      </div>
 
    
      <div className="container">
        <div className="row g-4 my-4">
          <div className="col-6" style={{aspectRatio: "3 / 2"}}>
            <div>
              <img src={test} alt="" width={"100%"}/>
            </div>
          </div>
          <div className="col-6" style={{aspectRatio: "3 / 2"}}>
            <div>
              <img src={test} alt="" width={"100%"}/>
            </div>
          </div>
          <div className="col-6" style={{aspectRatio: "3 / 2"}}>
            <div>
              <img src={test} alt="" width={"100%"}/>
            </div>
          </div>
          <div className="col-6" style={{aspectRatio: "3 / 2"}}>
            <div>
              <img src={test} alt="" width={"100%"}/>
            </div>
          </div>
          <div className="col-6" style={{aspectRatio: "3 / 2"}}>
            <div>
              <img src={test} alt="" width={"100%"}/>
            </div>
          </div>
         
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam dolore sint voluptate esse cumque perferendis, architecto cupiditate. Dignissimos quidem beatae soluta facere ad voluptatum ea suscipit accusantium a consequatur fugiat, et expedita delectus enim modi reprehenderit in blanditiis dolor? Minus minima dolor asperiores nisi, nemo tempora deserunt laboriosam ipsum maiores! Rerum ut, praesentium quae facilis quia tempora nostrum laboriosam deserunt voluptatem quidem, vitae nobis aliquam cum. Illum maiores ipsum qui non sunt quam perferendis iure eveniet ipsa officiis sit numquam autem corporis, odio debitis eligendi magnam exercitationem saepe adipisci nostrum distinctio quasi mollitia voluptas sapiente! Ullam optio ut animi fuga molestias consequatur officiis vero maxime. Obcaecati, nisi assumenda animi similique earum quod fugit expedita ipsa veniam unde inventore voluptas commodi sapiente esse suscipit dolore natus cum corporis quam dolorem dolor autem aut molestiae. Magnam corporis delectus voluptatibus numquam facilis quibusdam nam officia pariatur sint eos ab similique eligendi ullam rerum corrupti ea beatae veniam odio, porro qui ex. Nesciunt sunt voluptates aut perspiciatis consectetur at blanditiis maiores earum veritatis, itaque possimus enim quo nobis qui libero dolore, voluptate natus necessitatibus vitae pariatur maxime. Perferendis vitae natus magnam quod ipsam? Doloremque aspernatur sed vel quos in ipsum, nam amet magni.
        </p>
        <br />
        <br />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, nam hic sequi doloribus repellat aperiam inventore deleniti optio animi maxime quia impedit debitis cum qui vel mollitia architecto consequuntur voluptates facere tempora! Explicabo quibusdam eum praesentium adipisci consequuntur rerum reiciendis? Adipisci eum tempora modi iste quaerat itaque sint molestias at harum eius voluptates, iusto rerum rem quidem reiciendis tempore ipsa similique mollitia numquam quisquam. Dicta, totam. Dolores assumenda odio nesciunt asperiores tempora eaque. Natus voluptatibus unde ut consequatur et tempora dolore placeat beatae! Quos distinctio cum nemo, tempora rerum veritatis repudiandae delectus accusantium ea at placeat quisquam enim repellendus harum inventore quibusdam praesentium nihil? Quo molestiae ut non dicta similique laboriosam, quos velit ad itaque at nulla quisquam eos laborum officia libero id, facere, rerum voluptatum dignissimos neque placeat sit molestias. Iste, animi reprehenderit temporibus accusamus laboriosam dignissimos tempore pariatur ducimus quam amet officia porro enim odio voluptatum nesciunt molestias quia, consectetur accusantium. Tenetur repellat modi culpa eaque ducimus rerum quidem voluptas esse, corporis sint adipisci? Iste quos sapiente dolore distinctio assumenda quaerat eveniet vero molestiae provident, illum commodi repellendus aperiam voluptatem praesentium suscipit consequuntur, ducimus magnam excepturi soluta eum ut itaque. Accusantium itaque incidunt, aut sequi hic qui explicabo accusamus ea, a ad tenetur exercitationem, doloremque ullam. Suscipit, amet a ab fuga, nobis quidem repellat quod odio laborum est dolorum, eligendi debitis at molestiae quia? Unde, provident atque. Repellendus in, fugit, voluptates quas magnam ipsa harum quia consequatur id atque tenetur ducimus optio. Ad, deserunt quibusdam. Aliquam, saepe, libero qui sunt, ullam nostrum distinctio ea eveniet quaerat optio quam tempora at voluptatum id similique dicta. Omnis, eum molestias praesentium, culpa eius eligendi sequi dolore nobis voluptas natus dolor dolorem unde voluptatem id veritatis molestiae commodi minus eos consectetur, atque sint harum nostrum. Odio excepturi molestiae totam, hic aspernatur a.</p>
      </div>

        <h4>All Pages</h4>
        <div className="all-page-container">
          <AllPages pdf={samplePDF} />
        </div>
    </>
  );
};

export default Sections;