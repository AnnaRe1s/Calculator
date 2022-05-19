import styled from "styled-components";

/*Colors */

export const primery = "#111150";
export const black = "#000000";
export const whiteBoard = "#ffffffb8";
export const white = "#ffffff";
export const purple = "#743ad5";
export const pink = "#d53a9d";

/*Background */
export const Background = styled.div`
  background-color: ${primery};
  color: ${white};
  height: 100vh;
  padding: 50px;

  @media screen and (min-width: 600px) {
    background-color: ${pink};
    height: 86vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/*containers */
export const Container = styled.div`
  background-color: ${whiteBoard};
  height: 355px;
  border-radius: 18px;
  padding: 20px;

  @media screen and (min-width: 600px) {
    height: 355px;
    width: 300px;
  }
`;

export const ContainerResulte = styled.div`
  background-color: ${white};
  color: black;
  padding: 5px 10px;
  margin: 10px 0;
  text-align: right;
  font-size: 25px;
  @media screen and (min-width: 600px) {
    margin: 10px 10px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const ContainerSup = styled.div`
  display: flex;
  padding: 0 8px;
  justify-content: flex-end;
  @media screen and (min-width: 600px) {
    padding-right: 13px;
  }
`;

export const ContainerNumbers = styled.div`
  width: 150px;
  @media screen and (min-width: 600px) {
    width: 210px;
  }
`;

export const ContainerOperaitors = styled.div`
  width: 45px;
  @media screen and (min-width: 600px) {
    width: 75px;
  }
`;

/*Texts */

export const H1 = styled.h1`
  text-align: center;
  font-weight: 500;
`;

/*Buttons */

export const Buttons = styled.button`
  background-color: ${whiteBoard};
  border-image-slice: 1;
  border-width: 1px;
  border-image-source: linear-gradient(to left, ${purple}, ${pink});
  margin: 5px;
  font-size: 20px;
  width: 40px;
  height: 45px;
  @media screen and (min-width: 600px) {
    width: 60px;
    height: 50px;
  }
`;

export const ButtonDelete = styled.button`
  background-color: ${whiteBoard};
  border-image-slice: 1;
  border-width: 1px;
  border-image-source: linear-gradient(to left, ${purple}, ${pink});
  margin: 5px;
  font-size: 20px;
  width: 140px;
  @media screen and (min-width: 600px) {
    width: 200px;
  }
`;
