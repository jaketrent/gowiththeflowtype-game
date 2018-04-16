// flow-typed signature: a075eb050912e4482b0c6d636ce6bd33
// flow-typed version: <<STUB>>/lit-html_vx.x.x/flow_v0.69.0

declare class TemplateResult {
  values: any[];
  getHTML: () => string;
}

declare module 'lit-html' {
  declare export function html(template: string[]): TemplateResult
  declare export function render(
    result: TemplateResult,
    container: ?Element | ?DocumentFragment
  ): void
}
