import { createContext, useState } from "react";
import processPrompt from "../src/config/gemini";

export const Context = createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
    const [inputPrompt, setInputPrompt] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [promtResponse, setPromtResponse] = useState("");

    const deletePara = (index, nextWord) => {
        setTimeout(() => {
            setPromtResponse(prev => prev + nextWord);
        }, 70 * index);
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }

    const onSent = async (prompt) => {
        console.log("Prompt provided ------------------ ");
        setPromtResponse("");
        setLoading(true);
        setShowResult(true);
        let response;
        if (prompt) {
            response = await processPrompt(prompt);
            setRecentPrompt(prompt);
        } else {
            setPrevPrompts(prev => [...prev, inputPrompt]);
            response = await processPrompt(inputPrompt);
            setRecentPrompt(inputPrompt);
        }
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        // setPromtResponse(newResponse2);
        let newReasponseArray = newResponse2.split(" ");
        for (let i = 0; i < newReasponseArray.length; i++) {
            const nextWord = newReasponseArray[i];
            deletePara(i, nextWord + " ");
        }
        setLoading(false);
        setInputPrompt("");
    }

    return <Context.Provider
        value={{
            onSent,
            inputPrompt, setInputPrompt,
            recentPrompt, setRecentPrompt,
            prevPrompts, setPrevPrompts,
            showResult,
            loading,
            promtResponse,
            newChat
        }}
    >{children}</Context.Provider>
}

export default ContextProvider;