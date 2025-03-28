import { useState } from 'react';
import './app.css';


function App(){
    const [pointer, setPointer] = useState(0);
    const action =(tri)=>{
      if(tri=='i') setPointer(pointer+1)
      if(tri=='d') setPointer(pointer>0 ? pointer-1 :0)
      if(tri=='r') setPointer(0)
    }

    return(<div>
      <p className="prince">{pointer}</p>
      <div className='btn'>
      <button onClick={()=>action('i')}>Increse</button>
      <button onClick={()=>action('d')}>Decrease</button>
      <button onClick={()=>action('r')}>Reset</button>
      </div>
    </div>)
}

export default App;