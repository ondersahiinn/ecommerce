import { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

import { storage } from '@utils/firebase';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { changeCategoriesData, changeContent } from '@redux/slices/categories';
const RinchTextEditor = ({ type }: any) => {

    const content = useSelector((state: RootState) => state.categories.content)
    const quillRef: any = useRef(); // the solution

    console.log('data', content)
    const dispatch = useDispatch()

    const imageHandler = () => {
        // get editor
        const editor = quillRef.current.getEditor();

        const input: any = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            console.log('file', file)
            const uniqueImageName = file.name.split('.')[0] + uuidv4().slice(0, 10)
            const imageRef = ref(storage, `${type}/${uniqueImageName}`);
            const uploadImage = uploadBytesResumable(imageRef, file);
            uploadImage.on(
                'state_changed',
                (snapshot) => {
                    const progressPercent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    // setProgress(progressPercent);
                    console.log('pr', progressPercent)
                },
                (err) => {
                    console.log(err);
                }, async () => {
                    await getDownloadURL(uploadImage.snapshot.ref)
                        .then((url) => {
                            console.log('url', url)
                        })

                        .catch((err) => {

                            console.log(err);
                        });
                });


            // try {
            //     const link = IMAGE_LINK_HERE;
            //     editor.insertEmbed(editor.getSelection(), "image", link);
            // } catch (err) {
            //     console.log("upload err:", err);
            // }
        };
    };

    return (
        <>
            <ReactQuill modules={{
                toolbar: {
                    container: [
                        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ color: [] }, { background: [] }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [
                            { list: "ordered" },
                            { list: "bullet" },
                            { indent: "-1" },
                            { indent: "+1" },
                        ],
                        ['link', 'image'],
                        ["clean"],
                    ],
                    handlers: {
                        image: imageHandler
                    }
                }
            }}
                value={content}
                onChange={(content, delta, source, editor) => {
                    console.log('content, delta, source, editor', content, delta, source, editor)
                    dispatch(changeContent(content))
                }}
                ref={quillRef}
                theme="snow" className='text-black' defaultValue=''
            />
        </>);

}

export default RinchTextEditor