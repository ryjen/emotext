%{
  configs: [
    %{
      name: "default",
      checks: [
        # Historical style-only debt. Keep correctness/warning checks enabled.
        {Credo.Check.Design.AliasUsage, false},
        {Credo.Check.Readability.ModuleDoc, false},

        # Structural channel/controller debt is tracked in #11; changing these
        # paths during the security-gate PR would expand its behavioral surface.
        {Credo.Check.Refactor.CyclomaticComplexity, false},
        {Credo.Check.Refactor.Nesting, false}
      ]
    }
  ]
}
