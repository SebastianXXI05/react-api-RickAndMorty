export default ({data}) => {

  return (
    <div className="w-80 max-w-full mb-20 mx-8 bg-violet-500 p-3 rounded-lg text-white text-xl">
      <img 
        src={data.image} alt={'image of ' + data.name} 
        className="mx-auto mb-4"
      />
      <h3 className="mb-3"><b>Name:</b> {data.name}</h3>
      <h3 className="mb-3"><b>Especie:</b> {data.species}</h3>
    </div>
  )
}