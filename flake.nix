{
  description = "Emotext development and CI environment";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/b6018f87da91d19d0ab4cf979885689b469cdd41";

  outputs = { self, nixpkgs }:
    let
      systems = [ "x86_64-linux" "aarch64-linux" ];
      forAllSystems = nixpkgs.lib.genAttrs systems;
    in {
      devShells = forAllSystems (system:
        let
          pkgs = import nixpkgs { inherit system; };
          beam = pkgs.beam.packages.erlang_26;
        in {
          default = pkgs.mkShell {
            packages = [
              beam.erlang
              beam.elixir_1_16
              beam.rebar3
              pkgs.git
              pkgs.mise
              pkgs.nodejs_20
              pkgs.postgresql_16
            ];

            shellHook = ''
              export MIX_HOME="$PWD/.nix-mix"
              export HEX_HOME="$PWD/.nix-hex"
            '';
          };
        });
    };
}
