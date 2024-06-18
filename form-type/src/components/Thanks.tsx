
import "./Thanks.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

type ThanksProps = {
  data: {
    name: string;
    review: string;
    comment: string;
  };
};

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};
const Thanks = ({ data }: ThanksProps) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        Sua opinião é muito importante, avalie e ganhe benefícios na próxima
        compra.
      </p>
      <h3>Aqui está op resumo da sua avaliação: {data.name}</h3>
      <p className="review-data">
        <span>Satisfação:</span>
        {emojiData[data.review as keyof typeof emojiData]}
      </p>
      <p className="review-data">
        <span>Satisfação:</span>
        {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
