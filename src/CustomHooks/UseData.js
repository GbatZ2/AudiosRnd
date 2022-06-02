import { useEffect, useState } from 'react';
import { storage } from '../Firebase/firebase-config';
import {ref, listAll, getDownloadURL} from 'firebase/storage'

export default function UseData() {

    const audioListRef = ref(storage, "audios/");
    const [audios, setAudio] = useState([]);

    useEffect(  () => {
        getData()
    }, []);


    const getData = () => {
         listAll(audioListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((downloadURL) => {
                    setAudio((prev) => [...prev, downloadURL])
                })
            });
        });
        
    }

  return {audios}
}
