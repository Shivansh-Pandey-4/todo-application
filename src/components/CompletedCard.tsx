
type CompletedCardProps = {
     data : {
        id: number;
        title : string;
        isCompleted : boolean;
        completedAt? : string;
     }
}

const CompletedCard = (props: CompletedCardProps )=>{
    const {title,isCompleted,completedAt} = props.data;

    return(
        <div className="bg-gray-600 mt-4 p-4 rounded-xl shadow-md shadow-amber-50 w-2xl">
               <h1 className="text-black font-serif text-xl mb-1">Task - <span className="text-green-300 ">{title}</span> </h1>

               <h2 className="text-black font-serif text-xl">Status - <span className="text-green-300 ">{isCompleted?"Done":"Pending"}</span> </h2>

               <h2 className="text-black font-serif text-xl">CompletedAt - <span className="text-green-300 ">{completedAt}</span> </h2>
        </div>
    )
}

export default CompletedCard;