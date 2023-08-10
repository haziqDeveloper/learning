import React, { useState, useEffect } from 'react';
import FirstInformationData from './FirstInformationData';
import SecondInformationData from './SecondInformationData';
import ThirdInformationData from './ThirdInformationData';

const TemplateLayout = () => {
  const [page, setPage] = useState(1);
  const [dataSub, setDataSub] = useState({});
  const [dataSubFile, setDataSubFile] = useState({});
  const [dataGeneral, setDataGeneral] = useState({});

  const dataSubmitInformation = (data) => {
    console.log("Data submitted:", data);
    setDataSub(data);
  }

  const handleGeneralInformation = (data) =>
  {
    console.log("Data submitted:", data);
    setDataGeneral(data);
  }

  console.log("Data dataGeneral:", dataGeneral);

  const dataSubmitFile = (e) => {
    console.log("setDataSubFile:", e);
    setDataSubFile(e);
  }

  console.log("dataSubFile", dataSubFile);

  const goNextPage = () => {
    if (!dataSub.name || !dataSubFile || !dataGeneral) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log("Data dataGeneral:", dataGeneral);
    console.log("dataSub", dataSub);
    console.log("page:", page);
    if (page < 3) {
      setPage(page => page + 1);
      console.log("New page Value",page + 1);
    }
    localStorage.setItem('dataSub', JSON.stringify(dataSub));
    localStorage.setItem('dataSubFile', JSON.stringify(dataSubFile));
    localStorage.setItem('Data General', JSON.stringify(dataGeneral));
  };

  const goBackPage = () => {
    if (page < 3) {
      setPage(page => page - 1);
    }
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
          {page === 1 && (
            <FirstInformationData
              dataSubmitInformation={dataSubmitInformation}
              goNextPage={goNextPage}
              dataSubmitFile={dataSubmitFile}
            />
          )}
          {page === 2 && <SecondInformationData dataGeneralInformation={handleGeneralInformation} goNextPage={goNextPage}/>}
          {page === 3 && <ThirdInformationData />}
        </div>
    
        <div className="tem-move-button-">
          <button
            onClick={goBackPage}
            className='btn btn-danger'
            style={{"marginRight":"10px"}}
            disabled={page === 1}
          >
            Back
          </button>
          <button
            onClick={goNextPage}
            className='btn btn-primary'
            disabled={page === 3}
          >
            Next
          </button>
        </div>
      </div>   
    </div>
  );
};

export default TemplateLayout;
