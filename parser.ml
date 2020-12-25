open Printf

type animal = Dog of string | Cat of string

let say x =
    match x with
    | Dog x -> x ^ " says woof"
    | Cat x -> x ^ " says meow"
;;


let said = say (Cat "Fluffy ") ;;

let () = printf "%s" said;;
let () = print_endline ""
let () = print_endline ""
let () = printf "%s" (say (Dog "Jimmy "))
let () = print_endline ""
let () = print_endline ""
let jimmy = Dog "Jimmy"
let () = printf "%s" (say jimmy)
let () = print_endline ""
let () = print_endline ""

let () = printf "%s" ((func -> (jimmy x) -> x ) ^ " test")


(*  
let in_file = "header.hcaml"
let out_file = "header.html"
let message = "Hello!"
  
let () =
  (* Write message to file *)
  let oc = open_out out_file in    (* create or truncate file, return channel *)
  fprintf oc "%s\n" message;   (* write something *)   
  close_out oc;                (* flush and close the channel *)
  
  (* Read file and display the first line *)
  let ic = open_in in_file in
  try 
    let line = input_line ic in  (* read line from in_channel and discard \n *)
    print_endline line;          (* write the result to stdout *)
    flush stdout;                (* write on the underlying device now *)
    close_in ic                  (* close the input channel *) 
  
  with e ->                      (* some unexpected exception occurs *)
    close_in_noerr ic;           (* emergency closing *)
    raise e                      (* exit with error: files are closed but
                                    channels are not flushed *)
  
  (* normal exit: all channels are flushed and closed *)
  *)
