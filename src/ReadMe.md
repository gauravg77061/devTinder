dev tinder ui - 4
part 1 
Page refresh hone par log out ho rha tha kyuki store bhi refresh ho rha tha 
toh ham kya karenge jo body h
-> function create kiya fetchUser ar axios get call maari taaki profile fetch ho 
-> useEffect mein usko call kiya
-> jab bhi page refresh hoga toh vo function call hoga ar token ki help se profile 
refresh nhi hogi

part-2 
hamare pass store mein data present h phir bhi ham baar baar api call kar rahe h
ham kuch aesa karenge ki store mein data agar avalable ho toh ham vo data directly store se fetch karenge 
haa but agar ham url se change karke navigate karte h toh ye api call hi karega 

fetch user from store ->   const user = useSelector((store) => store.user);
thn call this in fetchUser ki agar ye user present naa htab hi api call kare 
ar hamne link karke dekhe pages ko toh api call nh ho rahi thi 
