import PropTypes from 'prop-types';

const Layout = (props) => {
    const { bgColors, bgStart, bgEnd } = props;
    return(
        <Background
            colors={bgColors}
            start={bgStart}
            end={bgEnd}
        >
            <Header/>
            <Body>
                {props.children}
            </Body>
        </Background>
    )
}
export default Layout;

Layout.propTypes = {
    bgColors: PropTypes.arrayOf(PropTypes.string),
    bgStart: PropTypes.object,
    bgEnd: PropTypes.object,
}