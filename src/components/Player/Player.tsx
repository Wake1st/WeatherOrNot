export type PlayerProps = {
  name: string;
};

const Player = ({ name }: PlayerProps) => {
  return <div>{name}</div>;
};

export default Player;
