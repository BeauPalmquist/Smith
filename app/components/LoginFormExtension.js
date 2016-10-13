import React, { PropTypes } from 'react';

const LoginFormExtension = ({ setAdditionalLoginParams }) => (
    <div className="form-group">
        <label className="col-md-3 control-label">Store: </label>
        <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              onChange={(e) => { setAdditionalLoginParams({ storeNumber: e.target.value }); }}
              placeholder="Store Id"
            />
        </div>
    </div>
);

LoginFormExtension.propTypes = {
    setAdditionalLoginParams: PropTypes.func.isRequired
};

export default LoginFormExtension;
