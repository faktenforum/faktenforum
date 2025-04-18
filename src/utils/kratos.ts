export function generateKratosResponse(
  instance_ptr: string,
  id: number,
  text: string,
  context?: Record<string, unknown>
) {
  return {
    messages: [
      {
        instance_ptr: instance_ptr,
        messages: [
          {
            id: id,
            type: "error",
            text: text,
            context: context
          }
        ]
      }
    ]
  };
}
