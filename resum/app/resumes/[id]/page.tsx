
export default function page({params}:any) {
  console.log(params.id)
  return (

    <div>{params.id}</div>
  )
}
