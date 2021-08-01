export default function Movie (props) {
  const {
    Title,
    Year,
    imdbID,
    Type,
    Poster,
  } = props;
  return   <div id={imdbID } className="card row">
  <div className="col s12 m12">
    <div className="card">
      <div className="card-image">
        {
          Poster === 'N/A' ? <img src="http://placehold.it/303x400"/>: <img className='poster' src={Poster}/>
        }
        
        <span className="card-title">{Title}</span>
      </div>
      <div className="card-content">
        <p>{Year}</p>
        <span className='right'>{Type}</span>
      </div>
    </div>
  </div>
</div>
          
}