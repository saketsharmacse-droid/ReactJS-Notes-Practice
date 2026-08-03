# Notes about Virtual DOM

- hum yaha pe main.jsx yaa jo bhi file ke createRoot ko dekhenge.
- createRoot is a method that creates a DOM like structure.
- jaise browser ke pass ek dom hota hai waise hi create root bhi ek dom like structure create krr deta hai.
- yeh kya krta hai, aapke main dom aur apne dom ko compare krta hai aur sirf unhi cheezon ko update krta hai jo aapke main dom mei update hui hai.
- lekin browser kya krta hai, poore dom ko remove krta hai aur wapis se repaint krta hai, isi ko page reload bolte hai.
- but react toh single page application bnata hai, toh yeh reload nhi krta.
- browser mei jo loading ka option aata hai that means ki poora dom wapis se repaint hora hai, poora structure firse bnn rha hai.
- lekin virtual dom mei kya hota hai, aap poora ka poora trace krr sakte ho track krr sakte ho dom ko, and jaha jaha pe values change hui hai jis component branch mei, usko waha se nikal ke wapis laga do.
- Virtual dom mei js apna poora dm tree bnata hai, track rakhta hai aur updates ko wapis waha update krr deta hai.
- aisa bhi ho sakta hai ki bahut saare elements internet se jude ho, like online humein updates aari hai, toh like update 1 aayi, fir update 2, toh kya hum yehnhi krr sakte ki thoda aisa algorithm develop krke yaa existing algo ko optimise krke ki thoda sa ruk ke baad mei ui ko update krein.
- like multiple updates ko immediate krne se accha thoda ruk ke ek saath update kro, rna ek ek skip krke saath mei.
- react team thought ki har ui ko instrantaneously update krna zaruri nhi hai, and ho sakta hai ki kuch update ke calls maine lagaye hai but unn calls ko drop krke new calls bhej duu and unn calls ko drop krr du.

## React Fiber

- google pe search kro 'react fiber.
- [ReactFiber](https://github.com/acdlite/react-fiber-architecture)

- virtual dom aaj kal use nhi hoti, fiber is an algorithm jo under the hood virtual dom ko update krta hai.
- it is core algorithm behind the virtual dom.
- problem kya aari thi, ek update hua, aapnein usko bheja, itti der mei dusra update aa gya, uske bheja firant teesra, toh isse accha ek saath bhej do updates.
- react phle instant update krr de rha tha, jisse react ke through animation, layout, gestures bahut affect ho rii thi.
- updates ko poore tree mei na krke sirf uss branch mei krne lage ab.
- key features: Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.
- Hydration: meri web layout bnn gyi, buttons wagera, but abhi kaam nhi krr rhe kyoki js inject nhi  hui hai, toh the process of making these elements work according to the intended purpose is hydration.
- hydration process wagera iss fiber algo se kaafi acchi hoti hai.
- fiber is now a well implemented algorithm.

- reconciliation ek recursive algorithm hai jo difference pehchan ke new and old file mei old ko update krr deta hai, dff mtlb difference.

- reconciliation hence updates after comparing between two trees, ek tree aaya dom se aur dusra tree aaya createRoot method se.
- reconciliation tells us ki konse parts mei diff hai and unko change hona chahiye.
- Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."
- poora ka poora dom update krna is reloading, jo ki unoptimised and resource hungry operation hai, toh iska alternaltive khoja gya to diff the trees and find the optimised way to do it.
- react ka reconciliation sirf dom pe nhi balki ios, android aur native mei bhi useful hai.


