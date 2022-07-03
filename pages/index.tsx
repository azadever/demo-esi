import type { NextPage } from "next";
import Image from "next/image";
import styled from "@emotion/styled";
import { Button, Divider, Modal, notification, Typography } from "antd";
import { useState } from "react";
import Title from "antd/lib/typography/Title";
import { useRouter } from "next/dist/client/router";

const HomeStyled = styled.div`
  min-height: 100vh;

  .bg-video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
  }

  .wrapper {
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    padding: 24px;
    flex-direction: column;
  }

  h2 {
    color: white;
    font-size: 32px;
  }

  .container {
    background: white;
    padding: 24px;
    display: flex;
    gap: 12px;
  }

  .type {
    border: 1px solid #ededed;
    padding: 24px;
    max-width: 240px;
  }

  .title {
    font-weight: bold;
    font-size: 18px;
    color: teal;
  }
`;

const ModalStyled = styled(Modal)`
  .total {
    text-align: center;
  }

  .caption {
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 4px;

    p {
      margin-top: 5px;
    }
  }

  .checkout {
    margin: auto;
    display: flex;
    text-align: center;
  }
`;

const types = [
  {
    label: "CARBON OFFSET BUYER",
    desc: "Offset the emissions of your daily activities for one month.",
    image: "/person.svg",
    button: "RM 12 | Buy Now",
  },
  {
    label: "CARBON OFFSET PROVIDER",
    desc: "Let's register with us and become our carbon offset provider.",
    image: "/company.svg",
    button: "Register Now",
  },
];

const Home: NextPage = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [totalCredit, setTotalCredit] = useState(1);

  const onSubmit = () => {
    notification.open({
      message: "Successfully checkout",
      description: "We will send an email to confirm your order.",
      duration: 3,
    });

    setShowModal(false);
  };

  return (
    <HomeStyled>
      <video autoPlay muted loop className="bg-video">
        <source src="/bg_video.mp4" />
      </video>
      <div className="wrapper">
        <h2>Purchase Carbon Credit</h2>
        <div className="container">
          {types.map((type, index) => {
            return (
              <div key={index} className="type">
                <Image src={type.image} alt="img" height={30} width={30} />
                <p className="title">{type.label}</p>
                <p className="desc">{type.desc}</p>
                <Button
                  onClick={() => {
                    if (type.label === types[0].label) {
                      setShowModal(true);
                    } else {
                      router.push("/signup");
                    }
                  }}
                >
                  {type.button}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <ModalStyled
        visible={showModal}
        footer={null}
        onCancel={() => setShowModal(false)}
        width={350}
      >
        <p className="caption">Select your total credits:</p>
        <Title className="total">RM {12 * totalCredit}</Title>
        <div className="buttons">
          <Button onClick={() => setTotalCredit(totalCredit + 1)}>+</Button>
          <p>{totalCredit}</p>
          <Button
            disabled={totalCredit === 1}
            onClick={() => setTotalCredit(totalCredit - 1)}
          >
            -
          </Button>
        </div>
        <Button className="checkout" onClick={() => onSubmit()}>
          Checkout
        </Button>
      </ModalStyled>
    </HomeStyled>
  );
};

export default Home;
