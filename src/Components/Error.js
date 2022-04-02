import React from 'react';

function Error({error,setError}) {


	setTimeout(() => setError(''), 5000)


	return <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
		{error}
	</div>
}

export default Error;
