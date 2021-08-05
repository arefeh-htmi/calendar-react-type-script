interface Props {
  content?: string;
}
const ErorrMessage = ({ content }: Props) => (
  <div className="message erorr_message">{content}</div>
);
export default ErorrMessage;
