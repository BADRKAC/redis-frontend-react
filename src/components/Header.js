import styled from "styled-components";
import DigitaClock from "./DigitaClock";
import Title from "./Title";

const Header = () => {
  return (
    <Wrapper>
<Title>آش غادير</Title>

      <Placeholder />

      <DigitaClock />
      <Placeholder />
      <HeaderItem>
        <Profile>
          <a href="https://web.facebook.com/badr.kacimi">
            <img
              src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.6435-9/48429697_2141082059247305_134804858619297792_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=C8TYfMN1ljoAX_9nTwK&_nc_ht=scontent.fcmn5-1.fna&oh=00_AT9fKbRESHc4sicjQMPdWDigyahvEmodoYGBP9Y0LCKURQ&oe=6249A982"
              alt=""
            />
          </a>
        </Profile>
      </HeaderItem>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-color: #20212d;
  height: 90px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  -webkit-box-shadow: 0px 4px 15px 0px #121212;
  box-shadow: 0px 4px 15px 0px #121212;
  position: sticky;
  top: 0;
`;

const HeaderItem = styled.div`
  padding: 10px 16px;
  border-radius: 4px;

  span {
    margin-left: 10px;
    font-weight: 500;
  }

  &:hover {
    background-color: #18181f;
    transition: 0.3s;
    cursor: pointer;
  }
`;

const Placeholder = styled.div`
  flex: 1;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 80px;
    border-radius: 50%;
  }
`;
