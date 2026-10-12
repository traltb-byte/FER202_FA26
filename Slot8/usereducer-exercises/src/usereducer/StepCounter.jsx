import React, { useReducer } from 'react';
import { Container, Card, Button, Form, ListGroup, Badge, Stack } from 'react-bootstrap';

// 1. Giới hạn giá trị & Hàm clamp
const MIN = 0;
const MAX = 100;
const clamp = (n) => Math.min(Math.max(n, MIN), MAX);

// 2. Hằng số Actions
const ACTIONS = {
  INCREMENT: 'counter/increment',
  DECREMENT: 'counter/decrement',
  SET_STEP: 'counter/set_step',
  RESET: 'counter/reset',
};

// 3. Initial State
const initialState = {
  count: 0,
  step: 1,
  history: [],
};

// 4. Reducer Logic
function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
    case ACTIONS.DECREMENT: {
      const delta = action.type === ACTIONS.INCREMENT ? state.step : -state.step;
      const next = clamp(state.count + delta);

      // Chạm giới hạn: giữ nguyên state cũ (không ghi thêm lịch sử)
      if (next === state.count) {
        return state;
      }

      const newLog = `${state.count} → ${next}`;
      return {
        ...state,
        count: next,
        history: [newLog, ...state.history].slice(0, 5),
      };
    }

    case ACTIONS.SET_STEP:
      return {
        ...state,
        step: action.payload,
      };

    case ACTIONS.RESET:
      return initialState;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// 5. Main Component
export default function StepCounter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { count, step, history } = state;

  const handleIncrement = () => dispatch({ type: ACTIONS.INCREMENT });
  const handleDecrement = () => dispatch({ type: ACTIONS.DECREMENT });
  const handleReset = () => dispatch({ type: ACTIONS.RESET });
  const handleStepChange = (e) => {
    dispatch({
      type: ACTIONS.SET_STEP,
      payload: Number(e.target.value),
    });
  };

  return (
    <Container className="my-4" style={{ maxWidth: '480px' }}>
      <Card className="shadow-sm border-0">
        <Card.Body className="p-4">
          <Card.Title className="text-center mb-3 fw-bold fs-4">
            Bộ Đếm Có Bước Nhảy & Lịch Sử
          </Card.Title>

          {/* Hiển thị số lớn ở giữa */}
          <div className="text-center my-3 py-2 bg-light rounded-3">
            <span className="display-1 fw-bold text-primary">{count}</span>
          </div>

          {/* Chọn bước nhảy */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Chọn bước nhảy:</Form.Label>
            <Form.Select value={step} onChange={handleStepChange} className="shadow-none">
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </Form.Select>
          </Form.Group>

          {/* Các nút bấm điều khiển */}
          <Stack direction="horizontal" gap={2} className="justify-content-center mb-4">
            <Button
              variant="outline-danger"
              onClick={handleDecrement}
              disabled={count === MIN}
              className="px-3"
            >
              − {step}
            </Button>
            
            <Button
              variant="secondary"
              onClick={handleReset}
              className="px-3"
            >
              Đặt lại
            </Button>

            <Button
              variant="outline-success"
              onClick={handleIncrement}
              disabled={count === MAX}
              className="px-3"
            >
              + {step}
            </Button>
          </Stack>

          {/* Danh sách lịch sử thay đổi */}
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-semibold">Lịch sử 5 thay đổi gần nhất:</span>
              <Badge bg="info" pill>{history.length}/5</Badge>
            </div>

            {history.length === 0 ? (
              <p className="text-muted text-center my-3 small">Chưa có lịch sử thay đổi</p>
            ) : (
              <ListGroup variant="flush" className="border rounded-2">
                {history.map((item, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center py-2"
                  >
                    <span className="font-monospace">{item}</span>
                    {index === 0 && (
                      <Badge bg="success" className="ms-2">Mới nhất</Badge>
                    )}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}