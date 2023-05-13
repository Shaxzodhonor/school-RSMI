const Result = () => {

  return (
    <div className="container my-96">
      <div className="fs-18 lh-20">
        <i className="fas fa-grip-lines text-main2 me-2"></i>            
        Заслуги
      </div>
      <div className="fs-46 lh-56 mb-48">
        Наши результаты
      </div>
      <div className="row gx-5">
        <div className="col-4">
          <div className="bg-success" style={{height: "500px", boxShadow: "9px 12px 13px rgba(149, 156, 182, 0.6)"}}>
            <img src="" alt=""/>
          </div>
        </div>
        <div className="col-8">
          <div className="fs-38 lh-38 mb-30">
            Маргиланов 
            Куашинбек
          </div>
          <div className="fs-20 lh-24 mb-2">
          20 лет.
          </div>
          <div className="fs-20 lh-24 mb-30">
            Lavozimi
          </div>
          <div className="fs-20 fw-400">
            <em>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</em>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result;