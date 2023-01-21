import React, { useState } from "react";
import * as S from "./styles";

import { Today, Forecast } from "../../components";

const Dashboard = ({ location, input }) => {
  const [convertUnits, setConvertUnits] = useState(false);

  return (
    <S.Container data-testid="container-dashboard">
      <Today
        location={location}
        convertUnits={convertUnits}
        setConvertUnits={setConvertUnits}
        input={input}
      />
      <Forecast
        location={location}
        convertUnits={convertUnits}
        setConvertUnits={setConvertUnits}
      />
    </S.Container>
  );
};

export default Dashboard;
