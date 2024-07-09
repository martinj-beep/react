import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_HOST = "https://jsonplaceholder.typicode.com/posts";

export default function PostForm() {
    const queryClient = useQueryClient();


    const { mutate, isError, error } = useMutation({
        mutationFn: async () => {
            await axios.post(API_HOST, { title: "rgtdtg", body: "efsefse" })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] })
        }
    });

    if (isError) {
        return <h1>Some error happened while posted</h1>
    }

  return (
    <div>
        <button onClick={mutate}>Create new post</button>
    </div>
  )
}
