import { MultiChatSocket , MultiChatWindow , useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const Chatprops = useMultiChatLogic('954c3531-b04d-492a-bbff-d11e62738583' ,
     props.user.username , props.user.secret)
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...Chatprops}/>
            <MultiChatWindow {...Chatprops}  style={{height: '100%'}} />
        </div>
    )
}

export default ChatsPage;