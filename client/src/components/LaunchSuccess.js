const LaunchSuccess = ( {success} ) => {
  return (
    <div>
      {success ? 
        " - success!"
        : 
        " - fail :-("
      }
    </div>
   );
}
 
export default LaunchSuccess;