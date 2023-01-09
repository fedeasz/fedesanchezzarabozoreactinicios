const After =(props) =>  (
<li>
    <a href="/">{props.text}</a>
</li>
);

/*a donde yo importa quedaria asi

<After text= "miel"/>
-----------------------------------------------------------------------------------------

const After =(props) => {
    const{text ,href} = props;
    {text ,href}  tmbine puede ser remplazando la palabra props

 return (
 <li>
    <a href={href}>{text}</a>
</li>
);   
}

*a donde yo importa quedaria asi

<After href="/miel" text="miel"

export default After*/