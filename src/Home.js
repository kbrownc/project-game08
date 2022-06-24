const Home = ({ games }) => {
  return (
    <div className="home">
      <h2>Home page</h2>
      <ul>
        {games.map(game => (
          <div className="game-preview" key={game._id}>
            <h2>{game.gameName}</h2>
            <p> {game.type} (Created: {game.published})</p>
            <a href={game.url}>LINK</a>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
