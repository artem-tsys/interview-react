import { createLogic } from "redux-logic";
import { SUBMIT } from "state/concepts/examples/types";

const submitOperation = createLogic({
  type: SUBMIT,
  latest: true,

  process({ getState, action }, dispatch, done) {
    done();
  },
});

export default submitOperation;
