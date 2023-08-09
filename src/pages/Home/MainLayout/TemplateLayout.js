import React, { useState, useEffect } from 'react';
import FirstInformationData from './FirstInformationData';
import SecondInformationData from './SecondInformationData';

const TemplateLayout = () => {
  const [page, setPage] = useState(1);
  const [dataSub, setDataSub] = useState({});
  const [dataSubFile, setDataSubFile] = useState({});

  const dataSubmitInformation = (data) => {
    console.log("Data submitted:", data);
    setDataSub(data);
  }

  const dataSubmitFile = (e) =>
  {
    console.log("setDataSubFile:", e);
    setDataSubFile(e);
  }

  console.log("dataSubFile", dataSubFile);

  const goNextPage = () => {
    console.log("dataSub",dataSub);
    setPage(page => page + 1);
    localStorage.setItem('dataSub', JSON.stringify(dataSub));
    localStorage.setItem('dataSubFile', JSON.stringify(dataSubFile));
  };

  const goBackPage = () => {
    setPage(page => page - 1);
  };

  useEffect(() => {
    // Store dataSub in localStorage whenever it changes
    localStorage.setItem('dataSub', JSON.stringify(dataSub));
    // localStorage.setItem('dataSubFile', JSON.stringify(dataSubFile));
  }, [dataSub]);

  return (
    <div className="parent-div">
      <div className="component-div">
        <div className='display'>
          {page === 1 && <FirstInformationData dataSubmitInformation={dataSubmitInformation} dataSubmitFile={dataSubmitFile}/>}
          {page === 2 && <SecondInformationData />}
        </div>
    
        <button onClick={goBackPage} className='btns' disabled={page === 1}>Back</button>
        <button onClick={goNextPage} disabled={page === 2}>Next</button>
      </div>   
    </div>
  );
};

export default TemplateLayout;
