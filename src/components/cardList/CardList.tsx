import Card, { Font } from '../card/Card';

export interface CardListProps {
    fonts: Font[];
}
function CardList(props: CardListProps) {
    const { fonts } = props;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {fonts.map((font) => (
                <Card font={font} key={font.id} />
            ))}
        </div>
    );
}
export default CardList;
