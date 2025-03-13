import classes from './MyButton.module.css';

export function MyButton() {
  function handleClick(){
     alert("Function is clicked");
  }
  return <button className={classes.bg_green} type="button" onClick={handleClick}>My Button</button>;
};

